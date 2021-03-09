//记分牌
class ScorePanel {
    score: number = 0;
    level: number = 1;
    maxLevel: number;
    upScore: number;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    //增加分数
    addScore() {

        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }
    //提升等级
    levelUp() {
        if (this.level < this.maxLevel) {

            this.levelEle.innerHTML = ++this.level + '';
        }

    }

}

export default ScorePanel;