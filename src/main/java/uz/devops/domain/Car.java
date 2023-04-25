package uz.devops.domain;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.*;
import uz.devops.domain.enumeration.CarType;

/**
 * A Car.
 */
@Entity
@Table(name = "car")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Car implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Size(max = 32)
    @Column(name = "model", length = 32)
    private String model;

    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private CarType type;

    @Size(max = 32)
    @Column(name = "serial_number", length = 32, unique = true)
    private String serialNumber;

    @Column(name = "active")
    private Boolean active;

    @Size(max = 32)
    @Column(name = "color", length = 32)
    private String color;

    @Column(name = "car_year")
    private Integer carYear;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Car id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return this.model;
    }

    public Car model(String model) {
        this.setModel(model);
        return this;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public CarType getType() {
        return this.type;
    }

    public Car type(CarType type) {
        this.setType(type);
        return this;
    }

    public void setType(CarType type) {
        this.type = type;
    }

    public String getSerialNumber() {
        return this.serialNumber;
    }

    public Car serialNumber(String serialNumber) {
        this.setSerialNumber(serialNumber);
        return this;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public Boolean getActive() {
        return this.active;
    }

    public Car active(Boolean active) {
        this.setActive(active);
        return this;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public String getColor() {
        return this.color;
    }

    public Car color(String color) {
        this.setColor(color);
        return this;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Integer getCarYear() {
        return this.carYear;
    }

    public Car carYear(Integer carYear) {
        this.setCarYear(carYear);
        return this;
    }

    public void setCarYear(Integer carYear) {
        this.carYear = carYear;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Car)) {
            return false;
        }
        return id != null && id.equals(((Car) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Car{" +
            "id=" + getId() +
            ", model='" + getModel() + "'" +
            ", type='" + getType() + "'" +
            ", serialNumber='" + getSerialNumber() + "'" +
            ", active='" + getActive() + "'" +
            ", color='" + getColor() + "'" +
            ", carYear=" + getCarYear() +
            "}";
    }
}
