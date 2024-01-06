import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/IAL32/calcolo-mutuo-casa.git', // Update to point to your repository
    user: {
      name: 'IAL32', // update to use your name
      email: '562969+IAL32@users.noreply.github.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
