// Функция для создания сигналов
function createSignal (initialValue) {
  let value = initialValue; // Сигнал хранит значение
  let dependencies = []; // Список зависимых сигналов

  let signal = function () {
    return value; // Получение текущего значения сигнала
  };

  // Устанавливаем новое значение сигнала
  signal.set = function (newValue) {
    value = newValue;
    // Уведомляем все зависимости о том, что сигнал изменился
    dependencies.forEach(dep => dep()); // Вызываем все зарегистрированные зависимости
  };

  // Регистрируем зависимость
  signal.registerDependency = function (computedSignal) {
    dependencies.push(computedSignal); // Добавляем вычисляемый сигнал в список зависимостей
  };

  return signal;
}

// Функция для создания вычисляемого сигнала
function createComputedSignal (computeFn) {
  let computedSignal = function () {
    return computeFn(); // Вычисляем значение на основе других сигналов
  };

  return computedSignal;
}

// Создаем два writable сигнала
let price = createSignal(100);  // Цена
let quantity = createSignal(2); // Количество

// Создаем вычисляемый сигнал для общей стоимости
let totalCost = createComputedSignal(() => price() * quantity()); // Общая стоимость

// Регистрируем зависимость для totalCost
price.registerDependency(totalCost);  // price зависит от totalCost
quantity.registerDependency(totalCost); // quantity зависит от totalCost

// Теперь, при изменении цены или количества, totalCost пересчитывается
console.log(totalCost()); // 200 (100 * 2)

price.set(120); // Изменили цену
console.log(totalCost()); // 240 (120 * 2)

quantity.set(3); // Изменили количество
console.log(totalCost()); // 360 (120 * 3)
