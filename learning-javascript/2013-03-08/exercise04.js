var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];

var key = 'name';
var values = ['goofy', 'scrooge'];

function select(data, key, values) {
	var a = [];

	var f;

	for(i = 0; i < values.length; i++) {
		
		f = data.filter(function(item, index, array) {

			return (values[i] === item[key]);
		});

		a.push(f);

	}
	return a;
}




select(data, key, values)
// [ { id:'04', name:'goofy' }, { id:'06', name:'scrooge' } ]