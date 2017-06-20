import React from 'react';

class TwitterFeed extends React.Component {
  render() {
    return (
      <div>
        {/* Tweets go here. How to get them? New component?
          import tweet display component

          state -> bookmarks: []
          state -> tweets: []

          use function to get tweet data from twitter account
          check what the api needs to get each account's info
          use a server to get the data, return it here

          bookmarks.map(b =>
            <BookmarkCard
              key={b.id}
              id={b.id}
              boardId={this.props.params.id}
              title={b.title}
              url={b.url}
              updateBookmarks={this.fetchBoardData}
            />
          )

          just make this the tweet data instead

          Above is the code from the Dashboardly front-end for reference
          */}
      </div>
    );
  }
}

export default TwitterFeed;
