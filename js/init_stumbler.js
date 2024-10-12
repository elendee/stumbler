
// corpus
const CORPUS = 'abcdefghijklmnoqrstuvwxyz'.split('')




// training

const train_model = ( args ) => {
	const {
		target,
		loss,
	} = args

	const WEIGHTS = []

	let output = ''
	let max_runs = 100 * 1000
	let c = 0
	while( c < max_runs ){
		const weights = random_weights( CORPUS )
		const guess = generate_guess( weights )
		if( distance_from( guess, target ) < loss ){
			WEIGHTS.push( weights )
		}
		c++
	}

	return WEIGHTS

}

const generate_guess = ( weights ) => {
	/*



			HARD PART 1



	*/
}

const random_weights = ( corpus_array ) => {
	/*




			HARD PART 2




	*/
}



// run it

const first_try = train_model({
	target: 'motorcycle',
	loss: 1,
})

