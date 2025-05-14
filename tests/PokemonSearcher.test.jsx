import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { PokemonSearcher } from "../src/components/PokemonSearcher";


describe("PokemonSearcher component tests", () => {

	test("PokemonSearcher renders", () => {

		const result = render(<PokemonSearcher />)
		// const pokemonSearchNameInputElement = screen.getByText("Pokemon to search for:");
		// const pokemonSearchNameInputElement = result.container.querySelector("#pokemonNameInput");

		const pokemonSearchNameInputElement = screen.getByTestId("pokemonNameInput")

		expect(pokemonSearchNameInputElement).toBeTruthy();
		expect(pokemonSearchNameInputElement).toBeInTheDocument();
	});

	test.skip("PokemonSearcher makes a random number", () => {

		// render(<PokemonSearcher />)

	});

});