// original: https://javascript.plainenglish.io/sveltekit-github-pages-4fe2844773de
import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/IAL32/calcolo-mutuo-casa.git', // Update to point to your repository
    user: {
      name: 'Adrian Castro', // update to use your name
      email: 'me@adct.it' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
