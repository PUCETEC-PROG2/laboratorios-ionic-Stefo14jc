import { IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { repositoryList } from '../interfaces/Repository';
import RepoItem from '../components/RepoItem';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Respositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {repositoryList.map((repo, index) => (
            <RepoItem {...repo} />
            ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;