export default function numberWithCommas(input: number) {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }