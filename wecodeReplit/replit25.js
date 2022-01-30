// Assignment
// class 생성을 연습해보겠습니다.
// MyMath 라는 class를 생성해주세요.
// constructor 에서는 숫자 2개를 인자로 받아 프로퍼티로 저장합니다.
// 총 4개의 메서드를 구현해주세요.
// getNumber : 두 개의 숫자가 무엇인지 배열로 반환하는 메서드 → ex) [1, 2]
// add : 두 개의 숫자를 더하는 메서드
// substract : 두 개의 숫자를 빼는 메서드
// multiply : 두 개의 숫자를 곱하는 메서드

class MyMath {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    getNumber() {
        return [this.num1, this.num2];
    }

    add() {
        return this.num1 + this.num2;
    }

    substract() {
        if(this.num1 > this.num2) {
            return this.num1 - this.num2;
        } else {
            return this.num2 - this.num1;
        }
    }

    multiply() {
        return this.num1 * this.num2;
    }
}