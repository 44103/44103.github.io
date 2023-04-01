.PHONY: create

create:
	yarn create react-app $(PROJ) --template typescript
tailwind:
	cd $(PROJ) && yarn tailwindcss init -p
