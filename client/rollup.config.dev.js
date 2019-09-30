import typescript from 'rollup-plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  input: './src/index.tsx',
  output: {
    file: './dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
    typescript(),
    serve({
      open: true,
      contentBase: '',
      historyApiFallback: true,
      port: 9000,
    }),
    livereload(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    commonJS({
      include: 'node_modules/**',
      namedExports: {
        'react': [
          'createElement', 
          'Component', 
          'StrictMode', 
          'Fragment',
          'useState',
          'useContext',
          'useRef',
          'useEffect',
          'useLayoutEffect',
          'useReducer',
          'useMemo',
          'useCallback'
        ],
        'node_modules/react-is/index.js': ['isValidElementType'],
        'react-dom': ['render'],
      },
    })
  ]
}
