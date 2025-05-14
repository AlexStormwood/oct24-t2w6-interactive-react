import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { PokemonSearcher } from "../src/components/PokemonSearcher";
import userEvent from "@testing-library/user-event";


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


	test("Can type in Pokemon name and search for that provided name", async () => {

		const result = render(<PokemonSearcher />);

		// Find the text input field for the pokemon name
		const pokemonSearchNameInputElement = screen.getByTestId("pokemonNameInput");
		expect(pokemonSearchNameInputElement).toBeInTheDocument();

		const user = userEvent.setup();

		// await user.click(pokemonSearchNameInputElement);
		// await user.keyboard("pikachu");

		await user.type(
			pokemonSearchNameInputElement,
			"pikachu",
			{
				skipAutoClose: true
			}
		);

		// expect(pokemonSearchNameInputElement.innerText).toBe("pikachu");
		
		waitFor(() => {
			expect(pokemonSearchNameInputElement.value).toBe("pikachu");
		});

		// Find the button to submit the pokemon name to the API 
		const pokemonSpecificSearchButton = screen.getByTestId("specificPokemonSearchSubmitButton");
		expect(pokemonSpecificSearchButton).toBeInTheDocument();
		await user.click(pokemonSpecificSearchButton);

		// Find the content rendered to the page to reflect the API result 
		waitFor(() => {
			// find the img element
			const resultImgElement = screen.getByTestId("pokemonSprite");
			// check the img element src
			expect(resultImgElement).toBeInTheDocument();
			expect(resultImgElement).toHaveAttribute(
				"src",
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png"
			);
		})

	});



});