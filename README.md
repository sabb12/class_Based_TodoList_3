## Project Introduction(프로젝트 소개)
##### ▪ Class로 만든 Todo List
<br/>

## What I've learned(배운 점)
##### ▪ 클래스를 사용하면 여러 개의 객체를 생성할 수 있는 템플릿이라는 것을 알게 되었고, 이를 사용하면 인스턴스가 여러 개 생성되어 Heap 메모리에 할당이 많아져 성능이 무겁다는 단점을 알게 되었습니다. 하지만 독립적이기 때문에 객체 관리가 편리하다는 장점도 배웠습니다.

##### [코드 예시]:
```Javascript
const input = document.getElementById('todoInput');
const button = document.getElementById('addBtn');

class Todo {
    constructor(title, done) {
        this.title = title;
        this.done = done;
    }
}

let newTodo = [];

button.addEventListener('click', () => {
    let todo = new Todo(input.value, false);
    newTodo.push(todo);
    console.log(newTodo);
});
```
##### [결과]: newTodo에 계속 새로 push하면 newTodo안에 push한 만큼 Todo instance(인스턴트)가 생성된다.
```Javascript
let newTodo = [
    Todo { title: "할 일 1", done: false },
    Todo { title: "할 일 2", done: false },
    Todo { title: "할 일 3", done: false }
];
```
<br/>

## Key Feature(주요 기능)
### 1. 할 일 추가 기능
##### ▪ 사용자가 입력창(.input)에 텍스트를 입력하고 Enter 키를 누르거나, addBtn 버튼을 클릭하면 새로운 할 일(todo) 항목이 추가됨.
##### ▪ handleCreateTodo() 함수는 새로운 할 일을 newTodo에 추가하고, HTML 요소로 변환한 후 DOM에 추가함.
<br/>

### 2. 할 일 삭제 기능
##### ▪ 각 할 일에는 삭제 버튼이 포함되어 있으며, 사용자가 이 버튼을 클릭하면 해당 항목이 newArray 배열에서 제거되고 DOM에서도 삭제됨.
##### ▪ 이벤트 위임을 사용하여 deleteButton 클래스를 가진 요소를 클릭했을 때 삭제 기능을 수행함.
<br/>

### 3. 완료 체크박스 기능
##### ▪ 사용자가 체크박스를 클릭하면 할 일의 checked 상태가 업데이트되며, 해당 항목이 "To Do" 목록에서 "Done" 목록으로 이동합니다(또는 반대로 이동).
<br/>

### 4. 할 일 수정 기능
##### ▪ 새로운 ToDo 항목 추가 시 input은 disabled=false로 시작합니다.
##### ▪ 수정 버튼 클릭 시 버튼이 "저장"으로 바뀌고, input은 disabled=true로 변경됩니다.
##### ▪ 저장 후 버튼이 "수정"으로 돌아가고, input은 다시 disabled=false로 돌아갑니다.
<br/>

## Stacks(사용 스택)
### - Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
<br/>

### - Development
- Languages

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
<br/>

## Project View(화면 구성)
![image](https://github.com/user-attachments/assets/9e029fc2-c461-4c7d-a5f9-83238a925576)


## Project Structure(프로젝트 구조)
```markdown
class_Based_TodoList_3
├── index.css
├── index.html
├── index.js
├── README.md
```
