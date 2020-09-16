# Update Azure API Management
This GitHub Action allows you to update your Azure API Management api from an OpenAPI endpoint or file. 

## Usage

### Inputs
- `swaggerPath`: URL/path to Swagger
- `apiManager`: APIM endpoint URL
- `creds`: APIM credentials. Expexted to be in json format

## Example usage
```yaml
- name: Azure DevOps Work Item linker
  uses: solidify/github-action-azdo-link@master
  with:
    swaggerPath: 'URL/path to Swagger'
    apiManager: ${{ secrets.API_MANAGER_URL }}
    creds: ${{ secrets.AZURE_CREDENTIALS }}
```

## License
The scripts and documentation in this project are released under the [MIT License](LICENSE)
