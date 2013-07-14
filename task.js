/**
 * Создает экземпляр космического корабля.
 * @name Vessel
 * @param {String} name Название корабля.
 * @param {Number}[]|Planet position Местоположение корабля.
 * @param {Number} capacity Грузоподъемность корабля.
 */
function Vessel(name, position, capacity) {

    if (typeof name !== 'string' || name.length === 0) {
        throw new Error("Check Vessel name");
    }

    if (!(position instanceof Planet) &&
        (typeof position !== 'object' || position.length !== 2)
        ) {
        throw new Error("Check Vessel position");
    }

    if (typeof capacity !== 'number' || capacity < 0) {
        throw new Error("Check Vessel capacity");
    }

    this.name     = name;
    this.position = position;
    this.capacity = capacity;

    this.cargoWeight = 0;
}

/**
 * Выводит текущее состояние корабля: имя, местоположение, доступную грузоподъемность.
 * @example
 * vessel.report(); // Грузовой корабль. Местоположение: Земля. Товаров нет.
 * @example
 * vesserl.report(); // Грузовой корабль. Местоположение: 50,20. Груз: 200т.
 * @name Vessel.report
 */
Vessel.prototype.report = function () {
    var report = 'Корабль "' + this.name + '". '
               + 'Местоположение: ' + (
                    (this.position instanceof Planet)
                        ? 'Планета "' + this.position.name + '"' : this.position[0] + ',' + this.position[1]
                 ) + '. '
               + 'Занято: ' + this.cargoWeight + ' из ' + this.capacity + 'т.';
    console.log(report);
};

/**
 * Выводит количество свободного места на корабле.
 * @name Vessel.getFreeSpace
 */
Vessel.prototype.getFreeSpace = function () {}

/**
 * Выводит количество занятого места на корабле.
 * @name Vessel.getOccupiedSpace
 */
Vessel.prototype.getOccupiedSpace = function () {}

/**
 * Переносит корабль в указанную точку.
 * @param {Number}[]|Planet newPosition Новое местоположение корабля.
 * @example
 * vessel.flyTo([1,1]);
 * @example
 * var earth = new Planet('Земля', [1,1]);
 * vessel.flyTo(earth);
 * @name Vessel.report
 */
Vessel.prototype.flyTo = function (newPosition) {}

/**
 * Создает экземпляр планеты.
 * @name Planet
 * @param {String} name Название Планеты.
 * @param {Number}[] position Местоположение планеты.
 * @param {Number} availableAmountOfCargo Доступное количество груза.
 */
function Planet(name, position, availableAmountOfCargo) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new Error("Check Planet name");
    }

    if (typeof position !== 'object' || position.length !== 2) {
        throw new Error("Check Planet position");
    }

    if (typeof availableAmountOfCargo !== 'number' || availableAmountOfCargo < 0) {
        throw new Error("Check Planet 'availableAmountOfCargo'");
    }

    this.name = name;
    this.position = position;
    this.cargo = availableAmountOfCargo;

}

/**
 * Выводит текущее состояние планеты: имя, местоположение, количество доступного груза.
 * @name Planet.report
 */
Planet.prototype.report = function () {

    var report = 'Планета "' + this.name + '". '
               + 'Местоположене: ' + this.position[0] + ',' + this.position[1] + '. '
               + ((!this.cargo) ? 'Грузов нет.' : 'Доступно груза: ' + this.cargo + 'т.');

    console.log(report);
};

/**
 * Возвращает доступное количество груза планеты.
 * @name Vessel.getAvailableAmountOfCargo
 */
Planet.prototype.getAvailableAmountOfCargo = function () {}

/**
 * Загружает на корабль заданное количество груза.
 *
 * Перед загрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Загружаемый корабль.
 * @param {Number} cargoWeight Вес загружаемого груза.
 * @name Vessel.loadCargoTo
 */
Planet.prototype.loadCargoTo = function (vessel, cargoWeight) {}

/**
 * Выгружает с корабля заданное количество груза.
 *
 * Перед выгрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Разгружаемый корабль.
 * @param {Number} cargoWeight Вес выгружаемого груза.
 * @name Vessel.unloadCargoFrom
 */
Planet.prototype.unloadCargoFrom = function (vessel, cargoWeight) {}
