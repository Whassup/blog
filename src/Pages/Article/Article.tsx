import { useParams } from 'react-router-dom';
import { Header } from '../../Header/Header';

export const Article = () => {
    const {article} = useParams<{ article: string}>();
    return (<>
        <Header />
        <p>This is an article <p>{article}</p></p>
  </>)
}