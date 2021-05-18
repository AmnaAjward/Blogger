import React, { Component } from "react";

class Blogs extends Component {
  state = {
    articles: [
      {
        id: 1,
        topic: "Arcu non sodales",
        content:
          "Arcu non sodales neque sodales ut etiam sit. Tellus mauris a diam maecenas sed enim. Quis eleifend quam adipiscing vitae. Sollicitudin ac orci phasellus egestas tellus. Faucibus et molestie ac feugiat. Consequat semper viverra nam libero justo laoreet sit amet cursus. Et molestie ac feugiat sed lectus vestibulum. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Fusce ut placerat orci nulla pellentesque dignissim enim. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Diam vulputate ut pharetra sit amet aliquam id. Interdum velit laoreet id donec ultrices tincidunt arcu. Dignissim enim sit amet venenatis urna. Tortor vitae purus faucibus ornare suspendisse sed.",
        dateTime: "5 minutes ago",
      },
      {
        id: 2,
        topic: "consectetur adipiscing elit",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue eu consequat ac. Erat imperdiet sed euismod nisi porta lorem. Orci porta non pulvinar neque laoreet suspendisse. Nibh praesent tristique magna sit amet purus gravida quis. Amet massa vitae tortor condimentum lacinia quis. Eget magna fermentum iaculis eu non. Et tortor consequat id porta nibh venenatis cras sed felis. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Enim ut tellus elementum sagittis vitae. Urna nec tincidunt praesent semper. Sed viverra ipsum nunc aliquet bibendum enim. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Viverra aliquet eget sit amet tellus cras. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Suscipit tellus mauris a diam maecenas sed enim ut.",
        dateTime: "35 minutes ago",
      },
    ],
  };

  render() {
    {
      return <div>{this.renderBlogs()}</div>;
    }
  }

  renderBlogs() {
    return (
      <div>
        {this.state.articles.map((article) => (
          <div
            key={article.id}
            className="article"
            onClick={this.doHandleArticle}
          >
            <h1>{article.topic}</h1>
            <p>{article.content}</p>
            <p style={{ textAlign: "right" }}>{article.dateTime}</p>
          </div>
        ))}
      </div>
    );
  }

  handleArticle() {
    console.log("Article clicked");
  }
}
export default Blogs;
