export const getHelloWorldReport = () => {
  return {
    content: [
      {
        text: 'Hello World!',
        style: 'header',
      },
      {
        text: 'This is a sample PDF generated with pdfmake',
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
    },
  };
};
