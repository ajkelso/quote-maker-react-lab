import React from 'react';
// import { connect } from 'react-redux'
// import quotes from '../reducers/quotes';


function QuoteCard(props) {
  
  const handleUpvote = () => {
    props.upvoteQuote(props.quote.id)
  }
  
  const handleDownvote = () => {
    props.downvoteQuote(props.quote.id)
  }

  const handleRemove = () => {
    console.log("hi");
    props.removeQuote(props.quote.id)
  }
  
  return(
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.quote.content}</p>
            {/* <p>{Render Quote Content}</p> */}
            <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpvote}
            >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleDownvote}
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleRemove}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
  )

  // const mapStateToProps = (state) => {
  //   return { quotes: state.quotes }
  // }
}
export default QuoteCard
