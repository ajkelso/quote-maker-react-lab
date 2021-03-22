import React from 'react';
// import { connect } from 'react-redux'
// import quotes from '../reducers/quotes';


function QuoteCard({upvoteQuote, downvoteQuote, removeQuote, quote}) {
  
  const handleUpvote = () => {
    upvoteQuote(quote.id)
  }
  
  const handleDownvote = () => {
    downvoteQuote(quote.id)
  }

  const handleRemove = () => {
    console.log("hi");
    removeQuote(quote.id)
  }
  
  return(
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{quote.content}</p>
            {/* <p>{Render Quote Content}</p> */}
            <footer>- author <cite title="Source Title">{quote.author}</cite></footer>
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
          <div>Votes: {quote.votes}</div>
        </div>
      </div>
    </div>
  )

  // const mapStateToProps = (state) => {
  //   return { quotes: state.quotes }
  // }
}
export default QuoteCard
