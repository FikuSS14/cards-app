import React from 'react';
import './App.css';
import Card from './components/Card';
import CardGrid from './components/CardGrid';

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <h1 className="mb-5 text-center">React Cards — демонстрация</h1>
        
        {/* Пример 1: Карточка с изображением сверху */}
        <h2 className="mb-3">1. Карточка с изображением</h2>
        <div className="row mb-5">
          <div className="col-md-4">
            <Card
              title="Заголовок карточки"
              text="Это пример текста карточки. Здесь можно разместить описание или любую другую информацию."
              imageSrc="https://via.placeholder.com/300x200/0d6efd/ffffff?text=Card+Image"
              buttonText="Перейти"
            />
          </div>
        </div>

        {/* Пример 2: Текстовая карточка без картинки */}
        <h2 className="mb-3">2. Текстовая карточка</h2>
        <div className="row mb-5">
          <div className="col-md-4">
            <Card
              title="Текстовая карточка"
              text="Пример карточки без изображения, содержащей только текстовое содержимое."
              buttonText="Подробнее"
              buttonVariant="outline-primary"
            />
          </div>
        </div>

        {/* Пример 3: Карточка с заголовком и футером */}
        <h2 className="mb-3">3. Карточка с header и footer</h2>
        <div className="row mb-5">
          <div className="col-md-4">
            <Card
              header="Заголовок"
              title="Особая карточка"
              text="Карточка с заголовком и нижним колонтитулом."
              footer="2 дня назад"
            />
          </div>
        </div>

        {/* Пример 4: Карточка с цветным фоном */}
        <h2 className="mb-3">4. Цветная карточка</h2>
        <div className="row mb-5">
          <div className="col-md-4">
            <Card
              title="Цветная карточка"
              text="Пример карточки с цветным фоном и белым текстом."
              buttonText="Действие"
              buttonVariant="light"
              bgColor="primary"
            />
          </div>
        </div>

        {/* Пример 5: Горизонтальная карточка */}
        <h2 className="mb-3">5. Горизонтальная карточка</h2>
        <div className="row mb-5">
          <div className="col-md-8">
            <Card
              title="Горизонтальная карточка"
              text="Это более широкая карточка с поддерживающим текстом ниже как естественный переход к дополнительному содержимому."
              imageSrc="https://via.placeholder.com/200x250/198754/ffffff?text=Image"
              imagePosition="left"
              footer="Последнее обновление 3 минуты назад"
            />
          </div>
        </div>

        {/* Пример 6: Группа карточек через CardGrid */}
        <h2 className="mb-3">6. Группа карточек (сетка)</h2>
        <CardGrid cols={3}>
          <Card
            title="Карточка 1"
            text="Это карточка с поддерживающим текстом ниже как естественный переход к дополнительному содержимому."
            imageSrc="https://via.placeholder.com/300x200/6f42c1/ffffff?text=Card+1"
            footer="Последнее обновление 3 минуты назад"
          />
          <Card
            title="Карточка 2"
            text="Эта карточка имеет поддерживающий текст ниже как естественный переход к дополнительному содержимому."
            imageSrc="https://via.placeholder.com/300x200/dc3545/ffffff?text=Card+2"
            footer="Последнее обновление 3 минуты назад"
          />
          <Card
            title="Карточка 3"
            text="Это более широкая карточка с поддерживающим текстом ниже как естественный переход к дополнительному содержимому. Эта карточка имеет еще более длинный контент."
            imageSrc="https://via.placeholder.com/300x200/fd7e14/ffffff?text=Card+3"
            footer="Последнее обновление 3 минуты назад"
          />
        </CardGrid>

        <h2 className="mb-3 mt-4">7. Карточка с кастомным содержимым (props.children)</h2>
        <div className="row mb-5">
          <div className="col-md-4">
            <Card title="Кастомный контент" buttonText="Действие">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Первый пункт</li>
                <li className="list-group-item">Второй пункт</li>
                <li className="list-group-item">Третий пункт</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;