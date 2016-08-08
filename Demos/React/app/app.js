var ExampleApplication = React.createClass({
  render: function() {
  	var posts = [
  		{
  			title:'This is blog post title',
  			body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra tempus enim vel ultricies. Sed dignissim id quam ac elementum. Integer est sapien, auctor vitae suscipit facilisis, fermentum in enim. Pellentesque placerat, lacus vitae egestas lobortis, leo tortor eleifend enim, sit amet vehicula tellus dui sit amet ex. Duis congue magna auctor velit tempor, a posuere justo imperdiet. Nulla at iaculis nibh, vel vulputate est.'
  		},
  		{
  			title:'First post',
  			body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra tempus enim vel ultricies. Sed dignissim id quam ac elementum. Integer est sapien, auctor vitae suscipit facilisis, fermentum in enim. Pellentesque placerat, lacus vitae egestas lobortis, leo tortor eleifend enim, sit amet vehicula tellus dui sit amet ex.'
  		}
  	]

  	var rows = [];

  	for (var i = 0; i < posts.length; i++) {
  		rows.push(
  			<div className="card card-2" key={i}>
  				<blog-post title={posts[i].title}>
  					<p>{posts[i].body}</p>
  				</blog-post>
  			</div>
  			)
  	}

  	return <div>{rows}</div>;
  }
});

ReactDOM.render(
<ExampleApplication />,
document.getElementById('container')
);
