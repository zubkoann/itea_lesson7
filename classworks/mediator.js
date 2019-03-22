/*
  Написать медиатор для группы студентов.

  Профессор отвечает только на вопросы старосты.

  У Студента есть имя и группа которой он пренадлежит.
  Он может запросить старосту задать вопрос или получить ответ.

  Староста может добавлять студентов в группу и передавать вопрос профессору.
*/

const Mediator = () => {
    class Professor {
        constructor(name) {
            this.name = name;
            this.monitor = null;
            this.answer=null;
            console.log(this)
        }
        answerTheQuestion(student, question) {
            if (student.monitor !== 'monitor') {
                console.error('It\' not your bussines');
            } else {
                console.log(`Yes, my dear?! ${question} Let me 1 min to think`);
                this.answer = prompt('what to answer to student?');
            }
        }
    }

    class Student {
        constructor(name) {
            this.name = name;
            this.monitor = null;
            console.log(this)
        }

        getAnswer(question, professor) {
            if (this.monitor !== null ) {
                if(professor.answer!==null){
                    console.log( `Professor send answer  ${professor.answer} `)
                }else{
                    console.log( `Professor hasn't answer yet `)
                }
            } else {
                console.warn(`${this.name} - you can't ask without Monitor, please add to group first`);
            }
        }

        tipTheMonitor(question, professor) {
            if (this.monitor !== null) {
                this.monitor.askProfessor(this, professor, question);
            } else {
                console.warn(`${this.name} - you can't ask without Monitor, please add to group first`);
            }
        }
    }

    class Monitor extends Student {
        constructor(name) {
            super(name);
            this.monitor = 'monitor'
            this.studentGroup = {};
            this.professors = {};
        }

        addToGroup(student) {
            this.studentGroup[student.name] = student;
            student.monitor = this;
            console.log(`Add new student '${student.name}'  to group`);
            console.log('List or students:', this.studentGroup);
        }

        addProfessor(professor) {
            this.professors[professor.name] = professor;
            professor.monitor = this;
            console.log(`Add new professor '${professor.name}'`);
            console.log('List or professors:', this.professors);
        }

        askProfessor(student, professor, question) {
            console.log(`${student.name} asks ${professor.name}: ${question}`);
            professor.answerTheQuestion(this, question);

        }
        sendProfessorAnswer(student, professor, question) {
            let answer =  professor.answerTheQuestion(this, question);
            console.log(`${professor.name} send to ${student.name} answer: ${answer}`);


        }
    }

    let student1 = new Student('Petya');
    let student2 = new Student('Katya');
    let student3 = new Student('Olya');
    let monitor = new Monitor('Valera')
    let professor = new Professor('Alexandr Petrovich');

    monitor.addProfessor(professor);
    monitor.addToGroup(student1);
    monitor.addToGroup(student2);

    student1.tipTheMonitor('how much', professor)
    student1.getAnswer('how much', professor)
    student3.tipTheMonitor('how much', professor)
}

export default Mediator;
