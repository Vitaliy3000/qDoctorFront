import React from 'react';

const render = () => (
  <div>
    <h2>Если интерфейс оказался не слишком понятным то читайте что тут написано!</h2>
    <p>
      Для того чтобы встать в очередь к определенному врачу необходимо:
    </p>
    <ol>
      <li>Зайдите на вклядку "Записаться"</li>
      <li>Выберите отделение</li>
      <li>Выбирите врача</li>
      <li>Перед вами таблица:</li>
      <ul>
        <li>Коричневые плашки - это у врача выходной</li>
        <li>Синие плашки, значит к врачу можно записаться сейчас на сайте emias.ru в удобное для вас время</li>
        <li>Зеленые плашки означают что вряч будет работать в это время</li>
        <li>Если на плашке написано "Заболел" или "Отпуск", значит врач лениться работать</li>
      </ul>
      <li>Выбирите подходящие для вас дни, и как только появится свободное окошко робот автоматически запишет на самое ранние если их будет несколько</li>
    </ol>
    <p>Когда вы выполнели все пункты вы молодец!</p>
    <p>
      Чтобы узнать к кому вы встали в очередь перейдите на вкладку "Мои записи".
      Если вы хотите отменить заись, то нажмите крестик.
    </p>
  </div>
  
)

export default render
