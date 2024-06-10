# stats-cloner

Clone Node.js [`fs.Stats`](http://nodejs.org/api/fs.html#fs_class_fs_stats) objects securely, retaining all class methods such as `stat.isDirectory()` and more.


## Usage

[![stats-cloner](https://nodei.co/npm/stats-cloner.png?mini=true)](https://nodei.co/npm/stats-cloner)

### `copy = require('stats-cloner')(stat)`

Returns a clone of the original `fs.Stats` instance (`stat`).

## License

MIT. See [LICENSE.md](http://github.com/mehmetxbozkurt/stats-cloner/blob/master/LICENSE.md) for details.