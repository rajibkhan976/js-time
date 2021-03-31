var flipdown = new FlipDown(datetime);
flipdown.start();
flipdown.ifEnded(() => {
  console.log("The countdown has ended!");
});
