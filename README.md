Update Azuee API Management
This GitHub Action allows you to update your Azure API Management api from an OpenAPI endpoint or file. 

## Usage

### Pre-requisites
Create a workflow `.yml` file in your `.github/workflows` directory. See documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs
- `swaggerPath`: URL/path to Swagger
- `apiManager`: APIM endpoint URL
- `creds`: APIM credentials. Expexted to be in json format

## Example usage
```yaml
- uses: solidify/github-actions-team-hallon
  with:
    swaggerPath: 'URL/path to Swagger'
    apiManager: ${{ secrets.API_MANAGER_URL }}
    creds: ${{ secrets.AZURE_CREDENTIALS }}
```

## Contributing
We would love for you to contribute! Thank you.

## License
The scripts and documentation in this project are released under the [MIT License](LICENSE)
