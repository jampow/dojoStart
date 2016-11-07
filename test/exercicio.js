var chai = require('chai');
var expect = chai.expect;
var exercicio = require("../lib/exercicio.js");

describe("Começando os testes", function() {
	describe("Retorna ele mesmo", function() {

		it("eu espero que se eu passar 0 retorne 0", function() {
			expect(exercicio.start(0)).to.be.equal(0);
		});

		it("eu espero que se eu passar 1 retorne 1", function() {
			expect(exercicio.start(1)).to.be.equal(1);
		});
	});

	describe("A, B e C devem retornar 2", function() {
		it("eu espero que se eu passar A retorne 2", function() {
			expect(exercicio.start("A")).to.be.equal(2);
		});

		it("eu espero que se eu passar a retorne 2", function() {
			expect(exercicio.start("a")).to.be.equal(2);
		});

		it("eu espero que se eu passar B retorne 2", function() {
			expect(exercicio.start("B")).to.be.equal(2);
		});

		it("eu espero que se eu passar b retorne 2", function() {
			expect(exercicio.start("b")).to.be.equal(2);
		});

		it("eu espero que se eu passar C retorne 2", function() {
			expect(exercicio.start("C")).to.be.equal(2);
		});

		it("eu espero que se eu passar c retorne 2", function() {
			expect(exercicio.start("c")).to.be.equal(2);
		});
		
	});

	describe("D, E, F devem retornar 3", function() {

		it("eu espero que se eu passar D retorne 3", function() {
			expect(exercicio.start("D")).to.be.equal(3);
		});

		it("eu espero que se eu passar d retorne 3", function() {
			expect(exercicio.start("d")).to.be.equal(3);
		});

		it("eu espero que se eu passar E retorne 3", function() {
			expect(exercicio.start("E")).to.be.equal(3);
		});

		it("eu espero que se eu passar e retorne 3", function() {
			expect(exercicio.start("e")).to.be.equal(3);
		});

		it("eu espero que se eu passar F retorne 3", function() {
			expect(exercicio.start("F")).to.be.equal(3);
		});

		it("eu espero que se eu passar f retorne 3", function() {
			expect(exercicio.start("f")).to.be.equal(3);
		});	
	});

	describe("G, H, I devem retornar 4", function() {
		it("eu espero que se eu passar G retorne 4", function() {
			expect(exercicio.start("G")).to.be.equal(4);
		});

		it("eu espero que se eu passar g retorne 4", function() {
			expect(exercicio.start("g")).to.be.equal(4);
		});

		it("eu espero que se eu passar H retorne 4", function() {
			expect(exercicio.start("H")).to.be.equal(4);
		});

		it("eu espero que se eu passar h retorne 4", function() {
			expect(exercicio.start("h")).to.be.equal(4);
		});

		it("eu espero que se eu passar I retorne 4", function() {
			expect(exercicio.start("I")).to.be.equal(4);
		});

		it("eu espero que se eu passar i retorne 4", function() {
			expect(exercicio.start("i")).to.be.equal(4);
		});
	});

	describe("J, K, L devem retornar 5", function() {
		it("eu espero que se eu passar J retorne 5", function() {
			expect(exercicio.start("J")).to.be.equal(5);
		});

		it("eu espero que se eu passar j retorne 5", function() {
			expect(exercicio.start("j")).to.be.equal(5);
		});

		it("eu espero que se eu passar K retorne 5", function() {
			expect(exercicio.start("K")).to.be.equal(5);
		});

		it("eu espero que se eu passar k retorne 5", function() {
			expect(exercicio.start("k")).to.be.equal(5);
		});

		it("eu espero que se eu passar L retorne 5", function() {
			expect(exercicio.start("L")).to.be.equal(5);
		});

		it("eu espero que se eu passar l retorne 5", function() {
			expect(exercicio.start("l")).to.be.equal(5);
		});
	});

	describe("M, N, O devem retornar 6", function() {
		it("eu espero que se eu passar M retorne 6", function() {
			expect(exercicio.start("M")).to.be.equal(6);
		});

		it("eu espero que se eu passar m retorne 6", function() {
			expect(exercicio.start("m")).to.be.equal(6);
		});

		it("eu espero que se eu passar N retorne 6", function() {
			expect(exercicio.start("N")).to.be.equal(6);
		});

		it("eu espero que se eu passar n retorne 6", function() {
			expect(exercicio.start("n")).to.be.equal(6);
		});

		it("eu espero que se eu passar O retorne 6", function() {
			expect(exercicio.start("O")).to.be.equal(6);
		});

		it("eu espero que se eu passar o retorne 6", function() {
			expect(exercicio.start("o")).to.be.equal(6);
		});
	});

	describe("P, Q, R, S devem retornar 7", function() {
		it("eu espero que se eu passar P retorne 7", function() {
			expect(exercicio.start("P")).to.be.equal(7);
		});

		it("eu espero que se eu passar p retorne 7", function() {
			expect(exercicio.start("p")).to.be.equal(7);
		});

		it("eu espero que se eu passar Q retorne 7", function() {
			expect(exercicio.start("Q")).to.be.equal(7);
		});

		it("eu espero que se eu passar q retorne 7", function() {
			expect(exercicio.start("q")).to.be.equal(7);
		});

		it("eu espero que se eu passar R retorne 7", function() {
			expect(exercicio.start("R")).to.be.equal(7);
		});

		it("eu espero que se eu passar r retorne 7", function() {
			expect(exercicio.start("r")).to.be.equal(7);
		});

		it("eu espero que se eu passar s retorne 7", function() {
			expect(exercicio.start("S")).to.be.equal(7);
		});

		it("eu espero que se eu passar s retorne 7", function() {
			expect(exercicio.start("s")).to.be.equal(7);
		});
	});

	describe("T, U, V devem retornar 8", function() {
		it("eu espero que se eu passar T retorne 8", function() {
			expect(exercicio.start("T")).to.be.equal(8);
		});

		it("eu espero que se eu passar t retorne 8", function() {
			expect(exercicio.start("t")).to.be.equal(8);
		});

		it("eu espero que se eu passar U retorne 8", function() {
			expect(exercicio.start("U")).to.be.equal(8);
		});

		it("eu espero que se eu passar u retorne 8", function() {
			expect(exercicio.start("u")).to.be.equal(8);
		});

		it("eu espero que se eu passar V retorne 8", function() {
			expect(exercicio.start("V")).to.be.equal(8);
		});

		it("eu espero que se eu passar v retorne 8", function() {
			expect(exercicio.start("v")).to.be.equal(8);
		});
	});

	describe("W, X, Y, Z devem retornar 9", function() {
		it("eu espero que se eu passar W retorne 9", function() {
			expect(exercicio.start("W")).to.be.equal(9);
		});

		it("eu espero que se eu passar w retorne 9", function() {
			expect(exercicio.start("w")).to.be.equal(9);
		});

		it("eu espero que se eu passar X retorne 9", function() {
			expect(exercicio.start("X")).to.be.equal(9);
		});

		it("eu espero que se eu passar x retorne 9", function() {
			expect(exercicio.start("x")).to.be.equal(9);
		});

		it("eu espero que se eu passar Y retorne 9", function() {
			expect(exercicio.start("Y")).to.be.equal(9);
		});

		it("eu espero que se eu passar y retorne 9", function() {
			expect(exercicio.start("y")).to.be.equal(9);
		});

		it("eu espero que se eu passar Z retorne 9", function() {
			expect(exercicio.start("Z")).to.be.equal(9);
		});

		it("eu espero que se eu passar z retorne 9", function() {
			expect(exercicio.start("z")).to.be.equal(9);
		});
	});

});

	describe("Imprimindo o número", function() {

		it("eu espero que se eu passar 1-HOME-SWEET-HOME retorne 1-4663-79338-4663", function() {
			expect(exercicio.getNumber("1-HOME-SWEET-HOME")).to.be.equal("1-4663-79338-4663");
		});
	});
