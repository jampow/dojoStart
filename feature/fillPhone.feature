Feature: Phone convertion
	Scenario: Success on convertion
		Given the phone "1-home-sweet-home" typed on field
		When convert button is clicked
		Then should show the number "1-4663-79338-4663"
