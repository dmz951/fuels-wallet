FROM ghcr.io/fuellabs/fuel-core:v0.17.3

ARG IP=0.0.0.0
ARG PORT=4000
ARG DB_PATH=./mnt/db/

ENV IP="${IP}"
ENV PORT="${PORT}"
ENV DB_PATH="${DB_PATH}"
ENV MIN_GAS_PRICE="${MIN_GAS_PRICE}"
ENV CONSENSUS_KEY="${CONSENSUS_KEY}"

# Install curl to use on
# healthcheck config
RUN apt update
RUN apt install curl -y

WORKDIR /root/

COPY chainConfig.json .

# https://stackoverflow.com/a/44671685
# https://stackoverflow.com/a/40454758
# hadolint ignore=DL3025
CMD ./fuel-core run \
    --ip ${IP} \
    --port ${PORT} \
    --db-path ${DB_PATH} \
    --utxo-validation \
    --min-gas-price ${MIN_GAS_PRICE} \
    --consensus-key ${CONSENSUS_KEY} \
    --chain ./chainConfig.json

EXPOSE ${PORT}
