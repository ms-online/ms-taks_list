// 获取节点
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// 加载所有事件监听
loadEventListeners();

// 加载所有事件监听函数
function loadEventListeners() {
  // 添加任务事件
  form.addEventListener("submit", addTask);
}

// addTask
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  } else {
    //  创建li
    const li = document.createElement("li");
    // 添加li类名
    li.className = "collection-item";
    // 创建文本节点，插入li中
    li.appendChild(document.createTextNode(taskInput.value));
    // 创建a标签
    const link = document.createElement("a");
    // 添加a标签的类名
    link.className = "delete-item secondary-content";
    // 添加字体图标
    link.innerHTML = '<i class="fa fa-times"></i>';
    //将a标签插入li中
    li.appendChild(link);
    // 将li插入ul
    taskList.appendChild(li);
    // 清除input
    taskInput.value = "";
  }
  e.preventDefault();
}
