import React from 'react';

class MovieList extends React.Component {

  render() {
    return (
      <section>
        {
          this.props.movies.map(movie => {
            return <Movie 
              data={movie}
            />
          })}
      </section>
    )
  }
}