// Глобальная переменная для текущего инжектора
// custom-provider-token.ts

type CustomProviderToken<T> = { new(...args: any[]): T } // Класс
let _currentInjector: Injector | undefined | null = undefined;


enum CustomInjectFlags {
  Default = 0,       // Стандартное поведение
  Optional, // Опциональная зависимость
  Host,     // Использовать хост-инжектор
  Self      // Инъекция только из текущего инжектора
}

function getCurrentInjector() {
  return _currentInjector;
}

// Функция для установки текущего инжектора
function setCurrentInjector(injector: Injector) {
  const former = _currentInjector; // Сохраняем ссылку на текущий инжектор

  _currentInjector = injector; // Устанавливаем новый инжектор
  return former; // Возвращаем ссылку на предыдущий инжектор
}

// Основная функция для внедрения зависимостей
function inject<T>(token: CustomProviderToken<T>, flags = CustomInjectFlags.Default): T | null {
  // Проверяем, находится ли вызов функции в правильном контексте
  if (!_currentInjector) {
    throw new Error(
      "inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`."
    );
  }

  // Получаем зависимость из текущего инжектора
  return _currentInjector.get(token, flags);
}


// Пример класса инжектора
class Injector {
  private providers = new Map<CustomProviderToken<any>, any>(); // Словарь для хранения провайдеров

  constructor(providers: Array<{ provide: CustomProviderToken<any>, useClass: any }>) {
    for (const {provide, useClass} of providers) {
      this.providers.set(provide, new useClass()); // Создание экземпляра провайдера
    }
  }

  get<T>(token: CustomProviderToken<T>, flags?: CustomInjectFlags): T | null {
    // Проверяем, существует ли токен в провайдерах
    if (this.providers.has(token)) {
      return this.providers.get(token);
    }
    return null; // Возвращаем null, если провайдер не найден
  }
}

// Пример использования
class MyService {
  public getMessage() {
    return "Hello from MyService!";
  }
}

// Создаем инжектор с провайдером MyService
const injector = new Injector([{provide: MyService, useClass: MyService}]);

// Устанавливаем текущий инжектор
setCurrentInjector(injector);

// Получаем зависимость в правильном контексте
const message = inject(MyService)?.getMessage();
console.log(message); // "Hello from MyService!"
