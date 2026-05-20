import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function MovieForm({ onSubmit, editMovie, onCancelEdit }) {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (editMovie) {
      setValue('title', editMovie.title);
      setValue('hall', editMovie.hall);
      setValue('price', editMovie.price);
      setValue('poster', editMovie.poster);
    } else {
      reset();
    }
  }, [editMovie]);

  const submitHandler = (data) => {
    onSubmit({
      title: data.title,
      hall: parseInt(data.hall),
      price: parseFloat(data.price),
      poster: data.poster || '',
      likes: editMovie ? editMovie.likes : 0,
      dislikes: editMovie ? editMovie.dislikes : 0,
    });
    reset();
  };

  return (
    <div className="movie-form">
      <h2>{editMovie ? 'Izmeni film' : 'Dodaj novi film'}</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
          <label>Naslov:</label>
          <input
            {...register('title', { required: 'Naslov je obavezan' })}
            placeholder="Unesite naslov"
          />
          {errors.title && <span className="error">{errors.title.message}</span>}
        </div>

        <div className="form-group">
          <label>Sala:</label>
          <input
            type="number"
            {...register('hall', {
              required: 'Sala je obavezna',
              min: { value: 1, message: 'Sala mora biti između 1 i 12' },
              max: { value: 12, message: 'Sala mora biti između 1 i 12' }
            })}
            placeholder="Unesite salu (1-12)"
          />
          {errors.hall && <span className="error">{errors.hall.message}</span>}
        </div>

        <div className="form-group">
          <label>Cena:</label>
          <input
            type="number"
            {...register('price', { required: 'Cena je obavezna' })}
            placeholder="Unesite cenu"
          />
          {errors.price && <span className="error">{errors.price.message}</span>}
        </div>

        <div className="form-group">
          <label>Poster URL:</label>
          <input
            {...register('poster')}
            placeholder="Unesite URL postera (opciono)"
          />
        </div>

        <div className="form-actions">
          <button type="submit">{editMovie ? 'Sačuvaj izmene' : 'Dodaj film'}</button>
          {editMovie && (
            <button type="button" onClick={onCancelEdit}>Otkaži</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default MovieForm;