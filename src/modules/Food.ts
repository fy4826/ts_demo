//食物 定义food类
class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }

    //定义food坐标
    //x轴
    get X() {
        return this.element.offsetLeft;
    }
    //y轴
    get Y() {
        return this.element.offsetTop;
    }

    change() {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;
// var food = new Food()
// food.change()
