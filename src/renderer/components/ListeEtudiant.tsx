import { Etudiant } from 'model/Etudiant';
import { FC, useEffect, useState } from 'react';

interface PropsLiEtudiant {
  student: Etudiant;
}

const LiEtudiant: FC<PropsLiEtudiant> = (props) => {
  const { student } = props;
  return (
    <li className="min-w-400">
      <button className="etudiant w-250" value={student.roomId}>
        {student.nomPC}
      </button>
    </li>
  );
};

const ListeEtudiant = () => {
  const [liste, setListe] = useState<Etudiant[]>([
    { nomPC: 'me', roomId: 'myRoom' },
    { nomPC: 'you', roomId: 'yourRoom' },
  ]);
  const [loaded, setLoaded] = useState(true);
  const getListe = () => {};

  useEffect(() => {}, []);

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
