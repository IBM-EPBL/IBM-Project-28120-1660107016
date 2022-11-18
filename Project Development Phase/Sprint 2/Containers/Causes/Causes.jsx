.ihd__features {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.ihd__features-heading {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    text-align: left;
    margin-right: 5rem;
}

.ihd__features-heading h1 {
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    font-family: var(--font-family);
}

.ihd__features-heading p {
    color: var(--color-subtext);
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    font-family: var(--font-family);

    margin-top: 2rem;
}

.ihd__features-container {
    flex: 1.5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

@media screen and (max-width: 990px) {
    .ihd__features {
        flex-direction: column;
    }

    .ihd__features-heading {
        margin: 0 0 2rem 0;
    }
}


@media screen and (max-width: 550px) {
    .ihd__features-heading h1 {
        font-size: 28px;
        line-height: 38px;
    }
}