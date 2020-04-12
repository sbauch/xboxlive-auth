//#region public methods

export const createRequestSignature = (
	_httpUrl: string,
	_httpMethod: string = 'GET',
	_httpBody: object | null = null,
	_additionalHttpHeaders: object | null = null,
	_policy: number = 1
) =>
	[
		'AAAAAQHWE', // Header
		'Co4YHRo7AHZkg9D6g77rucMoM2jMEjHvY6uxSSlxYu0+cvtsoxO/mQqSRaUyfVCEEK8xXiGEAPyatnbSA4QBc6Zj6QpyQ==' // Data
	].join('');

export const createProofKey = (
	_key: string = '',
	_algorithm: string = 'ES256'
) => ({
	crv: 'P-256',
	alg: 'ES256',
	use: 'sig',
	kty: 'EC',
	x: 'VndKQ5-gNBOiiaTwwCiTcQVxcxEARCYW-naPY0gwMHA',
	y: 'PiWV3igPgU-FRBPkdLisyglo5OYxCXE1hwK7OxKNKEg'
});

//#endregion
