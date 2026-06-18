import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList,
  useIonViewWillEnter
} from '@ionic/react';
import './Tab1.css';
import { Repository } from '../interfaces/Repository';
import RepoItem from '../components/RepoItem'; 
import { fetchRepositories } from '../services/GitHubService';

import LoadingSpinner from '../components/LoadingSpinner'; 



const Tab1: React.FC = () => {
  const [repositoryList, setRepositoryList] = React.useState<Repository[]>([]);
  const [loading, setLoading] = React.useState(false);

  const loadRepos = async () => {

    setLoading(true); 
    try {
      const reposData = await fetchRepositories();
      setRepositoryList(reposData);
    } catch (error) {
      console.error("Error cargando repositorios:", error);
    } finally {

      setLoading(false); 
    }
  };

  useIonViewWillEnter(() => {
    loadRepos();
  });

  return (
    <IonPage>
      <IonHeader> 
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loading && <LoadingSpinner />}

        <IonList>
          {repositoryList.map((repo) => (
            <RepoItem key={repo.name} {...repo} /> 
          ))} 
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;