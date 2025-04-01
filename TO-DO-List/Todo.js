
        
        const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');


        function addTask() {
            const taskText = taskInput.value.trim();
            
            if (taskText === '') return;

            
            const li = document.createElement('li');
            
            
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            
            
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';
            
            
            removeBtn.addEventListener('click', () => {
                li.remove();
            });

            
            li.appendChild(taskSpan);
            li.appendChild(removeBtn);
            
            taskList.appendChild(li);

            taskInput.value = '';
        }

        
        addTaskBtn.addEventListener('click', addTask);
        
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });
