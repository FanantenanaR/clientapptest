import { Etudiant } from 'model/Etudiant';
import { FC, useEffect, useState } from 'react';

interface PropsLiEtudiant {
  student: Etudiant;
}

const LiEtudiant: FC<PropsLiEtudiant> = (props) => {
  const { student } = props;
  return (
    <li className="min-w-400">
      <button type="button" className="etudiant w-250">
        {student.nomPC}
      </button>
    </li>
  );
};

const ListeEtudiant = () => {
  const liste = [
    { nomPC: 'me', roomId: 'myRoom' },
    { nomPC: 'you', roomId: 'yourRoom' },
  ];
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if ( liste.length > 0 ){
      setLoaded(true);
    }
  }, []);

  return (
    <>
      <div className="basis-11/12">
        <h1 className="text-center">Liste des etudiants connectés</h1>
        <div className="text-center mt-4">
          <ul>
            {!loaded
              ? "Aucun etudiant ne s'est connecter au reseau"
              : liste.map((etudiant, index) => (
                  <LiEtudiant
                    key={`etudiant${etudiant.roomId}`}
                    student={etudiant}
                  />
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListeEtudiant;
