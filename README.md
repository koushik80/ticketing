# Microservices practice

<h3 align="left">cmd lists:</h3>

<p align="left">kubectl get pods</p>
<p align="left">kubectl describe pod [pod name]</p>
<p align="left">skaffold dev</p>
<p align="left">npm run dev</p>

<h4 align="left">nats-test config:</h4>

<p align="left">from root ticketing directory</p>

` kubectl get pods `

` kubectl port-forward nats-depl-XXXXXX-XXXXXX 4222:4222 `
` kubectl port-forward nats-depl-XXXXXX-XXXXXX 8222:8222 `

<p align="left">from nats-test directory</p>

` npm run listener `

` npm run publish `

<br />

<p align="left">base64-encoded Secret command</p>

` echo -n 'your_secret' | base64 `

<p align="left">kubectl apply -f file_name.yaml</p>
<p align="left">kubectl get secrets</p>
<p align="left">kubectl create secret generic jwt-secret --from-literal=JWT_KEY=****</p>

<br />

<div>
<img width="1785" alt="Screenshot 2023-11-02 at 12 11 01 PM" src="https://github.com/koushik80/ticketing/assets/89943976/39f56a92-2b16-40ef-96f1-017066aa2307">
</div>

<br />

<h3 align="left">Supporting links:</h3>

[Docker + Mongo](https://hub.docker.com/_/mongo) <br />
[BASE64](https://www.base64decode.org/)  <br />
[JWT](https://jwt.io/)  <br />
[npm](https://www.npmjs.com/package/node-nats-streaming) <br />
