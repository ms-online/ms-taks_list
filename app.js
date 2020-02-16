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
  // 清除任务事件（单个）
  taskList.addEventListener("click", removeTask);
  // 清除所有任务
  clearBtn.addEventListener("click", clearTasks);
  // 过滤任务
  filter.addEventListener("keyup", filterTasks);
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

// removeTask
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) e.target.parentElement.parentElement.remove();
  }
}

// clearTasks
function clearTasks() {
  // 方法一
  // taskList.innerHTML = "";

  // 方法二(更快)
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// fliterTasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
