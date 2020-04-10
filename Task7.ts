function discount(originalPrice:number){

    const afterDiscount = originalPrice - ( originalPrice * 50 / 100 );
    console.log('Total Price is : '+originalPrice +', price after 50% discount : '+afterDiscount);
}
discount(20000);