# fetch interface for the Terminal

CLI interface to make HTTP requests using axios

`fesh <Command> [options] url`

```bash
fesh P \
  -b '{"firstName":"Armando", "lastName":"Garcia-Jacquier"}' \
  -h '{"X-Custom-Header": "foobar"}' \
  http://localhost:8000/users/
```

If multiple query params present in URL wrap in quotes
Alternitevely they can be passed as an object wrapped in quotes

```bash
fesh G 'http://localhost:8000/users?page=1&count=10'
```

### Request Methods

- GET alias G
  - Accepts Headers `--headers` or `-h` as a JSON object wrapped in quotes
  - Accepts Query Params `--query` or `-q` as a JSON object wrapped in quotes
  - Accepts Verbose mode `--verbose` or `-v`
- POST alias P
  - Accepts Headers `--headers` or `-h` as a JSON object wrapped in quotes
  - Accepts Query Params `--query` or `-q` as a JSON object wrapped in quotes
  - Accepts Body `--body` or `-b` as a JSON object wrapped in quotes
  - Accepts Verbose mode `--verbose` or `-v`
- PUT alias U
  - Accepts Headers `--headers` or `-h` as a JSON object wrapped in quotes
  - Accepts Query Params `--query` or `-q` as a JSON object wrapped in quotes
  - Accepts Body `--body` or `-b` as a JSON object wrapped in quotes
  - Accepts Verbose mode `--verbose` or `-v`
