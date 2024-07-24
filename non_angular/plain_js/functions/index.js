function multipleArg(...args) {
    const initialValue = 100;// start from 100
    const sumWithInitial = args.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      );
  console.log(sumWithInitial);
  console.log(arguments);
}


multipleArg(1,2,3,4,5,6,7,8,9)