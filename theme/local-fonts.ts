import localFont from 'next/font/local';

export const poppinsRegular = localFont({
  src: [
    {
      path: '../public/fonts/poppins/Poppins-Regular.ttf',
      style: 'normal',
    },
  ],
});

export const poppinsLight = localFont({
  src: [
    {
      path: '../public/fonts/poppins/Poppins-Light.ttf',
      style: 'normal',
    },
  ],
});
