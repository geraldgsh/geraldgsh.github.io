app.factory('suggestions', [function() {
	var demoSuggestions = {
	  posts: [
	    {
	      title: 'Free beer at club meetings',
	      addvotes: 15,
	      comments: [
	      	{
	      	  body: 'Looking forward to our next meeting!',
	      	  addvotes: 2
	      	},
	      	{
	      	  body: 'YAY!!!',
	      	  addvotes: 5
	      	},
	      	{
	      	  body: 'Hooray Beer!',
	      	  addvotes: 4
	      	}
	      ]
	    },
	    {
	      title: 'End all club emails with motivational  quote',
	      addvotes: 9,
	      comments: [
	      	{
	      	  body: 'Good idea!',
	      	  addvotes: 4
	      	},
	      	{
	      	  body: 'Are you sure?',
	      	  addvotes: 2
	      	}
	      ]
	    },
	    {
	      title: 'Retrofit water dispenser with Mountain Dew',
	      addvotes: 7,
	      comments: [
	      	{
	      	  body: 'This would be great after my workout',
	      	  addvotes: 3
	      	},
	      	{
	      		body: 'Sugar rush!',
	      		addvotes: 89
	      	}
	      ]
	    },
	    {
	      title: 'Sing Bon Jovi\'s "Its My Life" halfway throught meetings',
	      addvotes: 3,
	      comments: [
	      	{
	      	  body: 'Let\'s not and say we did',
	      	  addvotes: 4
	      	},
	      	{
	      	  body: 'How about just the first line of the chorus?',
	      	  addvotes: 3
	      	},
	      	{
	      	  body: 'Good way to clear our throats',
	      	  addvotes: 1
	      	}
	      ]
	    }
	  ]
	}
	return demoSuggestions;
}]);