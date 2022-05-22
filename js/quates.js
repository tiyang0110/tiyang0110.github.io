const quates = [
    {
        quate : '두려움은 희망 없이 있을 수 없고 희망은 두려움없이 있을 수 없다.',
        author : '바뤼흐 스피노자'
    },
    {
        quate : '미래는 예전의 미래가 아니다.',
        author : '요기 베라'
    },
    {
        quate : '사람들이 왜 새로운 생각을 두려워하는지 이해할 수 없다. 나는 오래된 생각이 두렵다.',
        author : '존 케이지'
    },
    {
        quate : '모두에게 전성기가 있지만 어떤 이들의 전성기는 다른 이들보다 더 길다.',
        author : '윈스턴 처칠'
    },
    {
        quate : '모든 실수가 어리석은 것이라 말해선 안된다.',
        author : '키케로'
    },
    {
        quate : '성공한 사람보다는 가치 있는 사람이 되려 하라.',
        author : '알버트 아인슈타인'
    },
    {
        quate : '위대한 사람은 기회가 없다고 원망하지 않는다.',
        author : '랄프 왈도 에머슨'
    },
    {
        quate : '겸손하지 않게 말하는 이는 잘 말할 수 없다는 것을 깨닫게될 것이다.',
        author : '공자'
    },
    {
        quate : '우리는 자신을 이김으로써 스스로를 향상시킨다. 싸움은 반드시 존재하고, 거기에서 이겨야 한다.',
        author : '에드워드 기번'
    },
    {
        quate : '지금 적극적으로 실행되는 괜찮은 계획이 다음 주의 완벽한 계획보다 낫다.',
        author : '조지 S. 패튼'
    }
]

const quate = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function randQuates(){
    const randNo = Math.floor(Math.random() * 10);

    quate.innerText = quates[randNo].quate;
    author.innerText = `- ${quates[randNo].author} -`;
}

randQuates();