import React, { useState, useEffect } from 'react';
import './styles/Dashboard.css';

const Dashboard = () => {
  const [voitures, setVoitures] = useState([]);
  const [editingVoiture, setEditingVoiture] = useState(null);
  const [addingVoiture, setAddingVoiture] = useState(false);
  const [newVoiture, setNewVoiture] = useState({});

  useEffect(() => {
    fetchVoitures();
  }, []);

  const fetchVoitures = async () => {
    try {
      const response = await fetch('http://localhost:8000/voitures');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des voitures');
      }
      const data = await response.json();
      setVoitures(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?');
      if (confirmDelete) {
        await fetch(`http://localhost:8000/voitures/${id}`, {
          method: 'DELETE',
        });
        fetchVoitures(); 
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la voiture:', error);
    }
  };

  const handleEdit = (voiture) => {
    setEditingVoiture(voiture);
  };

  const handleCancelEdit = () => {
    setEditingVoiture(null);
  };

  const handleSubmitEdit = async (updatedVoiture) => {
    try {
      await fetch(`http://localhost:8000/voitures/${updatedVoiture._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedVoiture),
      });
      fetchVoitures(); 
      setEditingVoiture(null); 
    } catch (error) {
      console.error('Erreur lors de la modification de la voiture:', error);
    }
  };
  const handleAddVoiture = () => {
    setAddingVoiture(true); 
  };

  const handleCancelAdd = () => {
    setAddingVoiture(false);
  };

  const handleSubmitAdd = async (newVoiture) => {
    try {
      await fetch('http://localhost:8000/voitures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVoiture),
      });
      fetchVoitures(); 
      setAddingVoiture(false); 
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la voiture:', error);
    }
  };

  return (
    <div>
      <header className='h'>
      <h3 >Bienvenue dans votre espace admin</h3>
    </header>
      
      <div style={{ display: "flex", justifyContent: "right", alignItems: "center", marginBottom: "10px" ,marginRight:"10%"}}>
      <button className="refresh" onClick={fetchVoitures}>Actualiser</button>
       {!addingVoiture && (
        <button className="add" onClick={handleAddVoiture}>Ajouter</button>
      )}
      
      </div>
      <table>
        <thead>
          <tr>
            <th>Marque</th>
            <th>Modèle</th>
            <th>Couleur</th>
            <th>Prix</th>
            <th>Kilométrage</th>
            <th>carburant</th>
            <th>manipuler voitures</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map(voiture => (
            <tr key={voiture._id}>
              <td>{voiture.marque}</td>
              <td>{voiture.modele}</td>
              <td>{voiture.couleur}</td>
              <td>{voiture.prix}</td>
              <td>{voiture.km}</td>
              <td>{voiture.fueltype}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(voiture)}>Modifier</button>
                <button className="delete" onClick={() => handleDelete(voiture._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {editingVoiture && (
  <div >
    <h2>Modifier la voiture</h2>
    <form className="F" onSubmit={(e) => {
      e.preventDefault();
      handleSubmitEdit(editingVoiture);
    }}>
      <div className='FA'>
      <input type="text" value={editingVoiture.marque} onChange={(e) => setEditingVoiture({ ...editingVoiture, marque: e.target.value })} placeholder={` ${editingVoiture.marque}`} />
      <input type="text" value={editingVoiture.modele} onChange={(e) => setEditingVoiture({ ...editingVoiture, modele: e.target.value })} placeholder={` ${editingVoiture.modele}`} />
      <input type="text" value={editingVoiture.couleur} onChange={(e) => setEditingVoiture({ ...editingVoiture, couleur: e.target.value })} placeholder={` ${editingVoiture.couleur}`} />
      <input type="number" value={editingVoiture.prix} onChange={(e) => setEditingVoiture({ ...editingVoiture, prix: e.target.value })} placeholder={` ${editingVoiture.prix}`} />
      <input type="number" value={editingVoiture.km} onChange={(e) => setEditingVoiture({ ...editingVoiture, km: e.target.value })} placeholder={`${editingVoiture.km}`} />
      <input type="text" value={editingVoiture.fueltype} onChange={(e) => setEditingVoiture({ ...editingVoiture, fueltype: e.target.value })} placeholder={` ${editingVoiture.fueltype}`} />
      
      <button className="edit" type="submit">Enregistrer</button>
      <button className="edit" onClick={handleCancelEdit}>Annuler</button>
      </div>
    </form>
  </div>
)}
    
    {addingVoiture && (
        <div>
          <h2>Ajouter</h2>
          <form className="F" onSubmit={(e) => {
            e.preventDefault();
            handleSubmitAdd(newVoiture);
          }}>
            
            <div className='FA'>
            <input type="text" value={newVoiture.marque} onChange={(e) => setNewVoiture({ ...newVoiture, marque: e.target.value })} placeholder="Marque" required />
            <input type="text" value={newVoiture.modele} onChange={(e) => setNewVoiture({ ...newVoiture, modele: e.target.value })} placeholder="Modèle" required />
            <input type="text" value={newVoiture.carName} onChange={(e) => setNewVoiture({ ...newVoiture, carName: e.target.value })} placeholder="Nom de la voiture" required />
            <input type="text" value={newVoiture.couleur} onChange={(e) => setNewVoiture({ ...newVoiture, couleur: e.target.value })} placeholder="Couleur" /> 
            <input type="number" value={newVoiture.prix} onChange={(e) => setNewVoiture({ ...newVoiture, prix: e.target.value })} placeholder="Prix" required />
            <input type="number" value={newVoiture.km} onChange={(e) => setNewVoiture({ ...newVoiture, km: e.target.value })} placeholder="Kilométrage" />
            <input type="number" value={newVoiture.nbPortes} onChange={(e) => setNewVoiture({ ...newVoiture, nbPortes: e.target.value })} placeholder="Nombre de portes" />
            <input type="text" value={newVoiture.imgUrl} onChange={(e) => setNewVoiture({ ...newVoiture, imgUrl: e.target.value })} placeholder="URL de l'image" />
            <select value={newVoiture.boiteVitesse} onChange={(e) => setNewVoiture({ ...newVoiture, boiteVitesse: e.target.value })} required>
            <option value="Manuelle">Manuelle</option>
            <option value="Automatique">Automatique</option>
          </select>
          
          <select value={newVoiture.fueltype} onChange={(e) => setNewVoiture({ ...newVoiture, fueltype: e.target.value })} required>
            <option value="">Sélectionnez un type de carburant</option>
            <option value="Diesel">Diesel</option>
            <option value="Essence">Essence</option>
          </select>

          
          
            <div>
            <button className="add" type="submit">Ajouter</button>
            <button className="edit" onClick={handleCancelAdd}>Annuler</button>
            </div>

            </div>
          </form>
        </div>
        
      )}



    </div>
  );
};

export default Dashboard;


