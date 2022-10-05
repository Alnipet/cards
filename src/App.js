import styles from './App.module.css';
import { MyCard } from './components/MyCard/MyCard';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className={styles.wrapper}>
      <MyCard isImage={true}>
        {(isImage) =>
          isImage && (
            <Card.Img
              variant="top"
              src="https://netology.ru/blog/wp-content/uploads/2020/05/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE.png"
            />
          )
        }
      </MyCard>
    </div>
  );
}

export default App;
